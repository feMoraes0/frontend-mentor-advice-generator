import { QuoteType } from "../@types";

const QuoteGateway = {
  get: async () => {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url, { cache: "no-cache" });
    const { slip } = await response.json();
    return slip satisfies QuoteType as QuoteType;
  }
};

export default QuoteGateway;
