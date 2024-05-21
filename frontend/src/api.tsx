import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyCompData, CompanyHistoricalDividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company";
interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
    try {
        const response = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&&apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`
        )
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            // console.log("Error: \n",error);
            return error.toString();
        }
    }
}
export const getCompanyProfile = async (query: string) => {
    try {
        const response = await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`);
        // console.log("response", response)
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getCashFlowStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getCompData = async (query: string) => {
    try {
        const data = await axios.get<CompanyCompData[]>(
            `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getTenK = async (query: string) => {
    try {
        const data = await axios.get<CompanyTenK[]>(
            `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getHistoricalDividend = async (query: string) => {
    try {
        const data = await axios.get<CompanyHistoricalDividend>(
            `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${query}?apikey=${import.meta.env.VITE_FINANCIAL_DATA_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};
