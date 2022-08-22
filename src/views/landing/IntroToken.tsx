import React, { useState, useEffect } from "react";
import { Header } from "layouts";
import { BsPlayFill } from "react-icons/bs";
import {
  ActionText,
  AddressText,
  ErrorNotify,
  IntroActionWrapper,
  IntroCarWrapper,
  IntroContainer,
  IntroContent,
  IntroTextWrapper,
  IntroWrapper,
  TokenText,
} from "./styles";
import { Container, Button, Progressbar, Input } from "components";
import { useEthContext } from "context/EthereumContext";
import { toast } from "react-toastify";
import {
  contract_abi,
  contract_address,
  token_abi,
  token_address,
} from "constant/contract";
import { formatNumber } from "utils/formatNumber";

const IntroToken: React.FC = () => {
  const [state, setState] = useState<any>({ bnb: 0, token: 0 });
  const [restTotal, setRestTotal] = useState<number>(0);
  const [error, setError] = useState("");
  const { provider, currentAcc, web3 }: any = useEthContext();
  const [loading, setLoading] = useState(false);
  const { ethereum }: any = window;
  useEffect(() => {
    if (web3) {
      const contract = new web3.eth.Contract(token_abi, token_address);
      const interval = setInterval(async () => {
        await contract.methods
          .balanceOf(contract_address)
          .call()
          .then((res: any) => {
            setRestTotal(Number((res / 10 ** 18).toFixed(3)));
          })
          .catch((err: any) => {
            toast.error(err, { theme: "dark" });
          });
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  const handleConnectWallet = async () => {
    if (provider) {
      if (currentAcc !== "") {
        if (Number(ethereum.chainId) !== 56) {
          toast.error("Please connect to BSC Mainnet", {
            theme: "dark",
          });
        } else {
          if (Number(state.bnb) >= 0.1 && Number(state.bnb) <= 5) {
            setError("");
            const contract = new web3.eth.Contract(
              contract_abi,
              contract_address
            );
            setLoading(true);
            await contract.methods
              .preSale(web3.utils.toWei(state.token.toString(), "ether"))
              .send({
                from: currentAcc,
                value: web3.utils.toWei(state.bnb.toString(), "ether"),
              })
              .on("receipt", function (receipt: any) {
                toast.success("Success!", {
                  theme: "dark",
                });
                setLoading(false);
              })
              .on("error", function (error: any) {
                toast(error);
                setLoading(false);
              });
          } else {
            if (Number(state.bnb) < 0.1) {
              setError("Min value: 0.1");
            } else if (Number(state.bnb) > 5) {
              setError("Max value: 5");
            }
          }
        }
      } else {
        await provider.request({ method: `eth_requestAccounts` });
      }
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  };

  const handleChange = (e: any) => {
    setState(
      e.target.name === "bnb"
        ? { bnb: e.target.value, token: Number(e.target.value) * 3000 }
        : { bnb: Number(e.target.value) / 3000, token: e.target.value }
    );
  };
  return (
    <IntroWrapper id="introduction">
      <IntroContent>
        <Header />
        <Container>
          <IntroContainer>
            <IntroTextWrapper>
              <h1>BigApple Tokens</h1>
              <p>
                {
                  "BigApple token is a decentralized, business community- building cryptocurrency. That is an experiment develop with the Binance Ecosystem. This token build on top of binance blockchain Network like many others token."
                }
              </p>
              <IntroActionWrapper>
                <a href="#contact" style={{ textDecoration: "none" }}>
                  <Button className="fit-content border">Contact</Button>
                </a>
                <a href="#howitworks">
                  <Button className="fit-content border play">
                    <BsPlayFill color="#fff" size={26} />
                  </Button>
                </a>
                <ActionText>
                  <h6>Watch Video</h6>
                  <span>What and How it works?</span>
                </ActionText>
              </IntroActionWrapper>
            </IntroTextWrapper>
            <IntroCarWrapper>
              <p>BigApple</p>
              <ErrorNotify visible={error !== ""}>{error}</ErrorNotify>
              <Input
                type="number"
                name="bnb"
                value={state.bnb}
                onChange={handleChange}
                disabled={!currentAcc}
              />
              <span>BNB: {state.bnb}</span>
              <Input
                type="number"
                value={state.token}
                onChange={handleChange}
                name="token"
                disabled={!currentAcc}
              />
              <span>BIGAPPLE: {state.token}</span>
              <Progressbar
                progress={(100 * (100000000 - restTotal)) / 100000000}
              />
              <span>Rest supply: {formatNumber(restTotal)}</span>

              <Button
                loading={loading}
                onClick={loading ? () => {} : handleConnectWallet}
                className="intro-form-button"
              >
                {currentAcc ? "Get Tokens" : "Connect Wallet"}
              </Button>
            </IntroCarWrapper>
          </IntroContainer>
        </Container>
      </IntroContent>
    </IntroWrapper>
  );
};

export default IntroToken;
