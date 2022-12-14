import {PublicKey} from "@solana/web3.js";
import {BeetStruct, blob, bool, publicKey, u64, u8} from "../beets";
import {bignum, u128} from "@metaplex-foundation/beet";

export type RaydiumPoolV4 = {
    status: bignum,
    nonce: bignum,
    maxOrder: bignum,
    depth: bignum,
    baseDecimal: bignum,
    quoteDecimal: bignum,
    state: bignum,
    resetFlag: bignum,
    minSize: bignum,
    volMaxCutRatio: bignum,
    amountWaveRatio: bignum,
    baseLotSize: bignum,
    quoteLotSize: bignum,
    minPriceMultiplier: bignum,
    maxPriceMultiplier: bignum,
    systemDecimalValue: bignum,
    minSeparateNumerator: bignum,
    minSeparateDenominator: bignum,
    tradeFeeNumerator: bignum,
    tradeFeeDenominator: bignum,
    pnlNumerator: bignum,
    pnlDenominator: bignum,
    swapFeeNumerator: bignum,
    swapFeeDenominator: bignum,
    baseNeedTakePnl: bignum,
    quoteNeedTakePnl: bignum,
    quoteTotalPnl: bignum,
    baseTotalPnl: bignum,
    quoteTotalDeposited: bignum,
    baseTotalDeposited: bignum,
    swapBaseInAmount: bignum,
    swapQuoteOutAmount: bignum,
    swapBase2QuoteFee: bignum,
    swapQuoteInAmount: bignum,
    swapBaseOutAmount: bignum,
    swapQuote2BaseFee: bignum,
    // amm vault
    baseVault: PublicKey,
    quoteVault: PublicKey,
    // mint
    baseMint: PublicKey,
    quoteMint: PublicKey,
    lpMint: PublicKey,
    // market
    openOrders: PublicKey,
    marketId: PublicKey,
    marketProgramId: PublicKey,
    targetOrders: PublicKey,
    withdrawQueue: PublicKey,
    lpVault: PublicKey,
    owner: PublicKey,
    pnlOwner: PublicKey,
}

export type RaydiumPoolV5 = {
    accountType: bignum,
    status: bignum,
    nonce: bignum,
    maxOrder: bignum,
    depth: bignum,
    baseDecimal: bignum,
    quoteDecimal: bignum,
    state: bignum,
    resetFlag: bignum,
    minSize: bignum,
    volMaxCutRatio: bignum,
    amountWaveRatio: bignum,
    baseLotSize: bignum,
    quoteLotSize: bignum,
    minPriceMultiplier: bignum,
    maxPriceMultiplier: bignum,
    systemDecimalsValue: bignum,
    abortTradeFactor: bignum,
    priceTickMultiplier: bignum,
    priceTick: bignum,

    minSeparateNumerator: bignum,
    minSeparateDenominator: bignum,
    tradeFeeNumerator: bignum,
    tradeFeeDenominator: bignum,
    pnlNumerator: bignum,
    pnlDenominator: bignum,
    swapFeeNumerator: bignum,
    swapFeeDenominator: bignum,

    baseNeedTakePnl: bignum,
    quoteNeedTakePnl: bignum,
    quoteTotalPnl: bignum,
    baseTotalPnl: bignum,
    poolOpenTime: bignum,
    punishPcAmount: bignum,
    punishCoinAmount: bignum,
    orderbookToInitTime: bignum,
    swapBaseInAmount: bignum,
    swapQuoteOutAmount: bignum,
    swapQuoteInAmount: bignum,
    swapBaseOutAmount: bignum,
    swapQuote2BaseFee: bignum,
    swapBase2QuoteFee: bignum,

    baseVault: PublicKey,
    quoteVault: PublicKey,
    baseMint: PublicKey,
    quoteMint: PublicKey,
    lpMint: PublicKey,

    modelDataAccount: PublicKey,
    openOrders: PublicKey,
    marketId: PublicKey,
    marketProgramId: PublicKey,
    targetOrders: PublicKey,
    owner: PublicKey,
    padding: Buffer
}

export type RaydiumPool = RaydiumPoolV5 | RaydiumPoolV4;

export const RaydiumPoolV4Struct = new BeetStruct<RaydiumPoolV4>(
    [
        ["status", u64],
        ["nonce", u64],
        ["maxOrder", u64],
        ["depth", u64],
        ["baseDecimal", u64],
        ["quoteDecimal", u64],
        ["state", u64],
        ["resetFlag", u64],
        ["minSize", u64],
        ["volMaxCutRatio", u64],
        ["amountWaveRatio", u64],
        ["baseLotSize", u64],
        ["quoteLotSize", u64],
        ["minPriceMultiplier", u64],
        ["maxPriceMultiplier", u64],
        ["systemDecimalValue", u64],
        ["minSeparateNumerator", u64],
        ["minSeparateDenominator", u64],
        ["tradeFeeNumerator", u64],
        ["tradeFeeDenominator", u64],
        ["pnlNumerator", u64],
        ["pnlDenominator", u64],
        ["swapFeeNumerator", u64],
        ["swapFeeDenominator", u64],
        ["baseNeedTakePnl", u64],
        ["quoteNeedTakePnl", u64],
        ["quoteTotalPnl", u64],
        ["baseTotalPnl", u64],
        ["quoteTotalDeposited", u128],
        ["baseTotalDeposited", u128],
        ["swapBaseInAmount", u128],
        ["swapQuoteOutAmount", u128],
        ["swapBase2QuoteFee",u64],
        ["swapQuoteInAmount",u128],
        ["swapBaseOutAmount",u128],
        ["swapQuote2BaseFee",u64],
        // amm vault
        ["baseVault", publicKey],
        ["quoteVault", publicKey],
        ["baseMint", publicKey],
        ["quoteMint", publicKey],
        ["lpMint", publicKey],
        ["openOrders", publicKey],
        ["marketId", publicKey],
        ["marketProgramId", publicKey],
        ["targetOrders", publicKey],
        ["withdrawQueue", publicKey],
        ["lpVault", publicKey],
        ["owner", publicKey],
        ["pnlOwner", publicKey],
    ],
    (args) => args as RaydiumPoolV4,
    "RaydiumPoolV4"
);


export const RaydiumPoolV5Struct = new BeetStruct<RaydiumPoolV5>(
    [
        ["accountType", u64],
        ["status", u64],
        ["nonce", u64],
        ["maxOrder", u64],
        ["depth", u64],
        ["baseDecimal", u64],
        ["quoteDecimal", u64],
        ["state", u64],
        ["resetFlag", u64],
        ["minSize", u64],
        ["volMaxCutRatio", u64],
        ["amountWaveRatio", u64],
        ["baseLotSize", u64],
        ["quoteLotSize", u64],
        ["minPriceMultiplier", u64],
        ["maxPriceMultiplier", u64],
        ["systemDecimalsValue", u64],
        ["abortTradeFactor", u64],
        ["priceTickMultiplier", u64],
        ["priceTick", u64],
        ["minSeparateNumerator", u64],
        ["minSeparateDenominator", u64],
        ["tradeFeeNumerator", u64],
        ["tradeFeeDenominator", u64],
        ["pnlNumerator", u64],
        ["pnlDenominator", u64],
        ["swapFeeNumerator", u64],
        ["swapFeeDenominator", u64],
        ["baseNeedTakePnl", u64],
        ["quoteNeedTakePnl", u64],
        ["quoteTotalPnl", u64],
        ["baseTotalPnl", u64],
        ["poolOpenTime", u64],
        ["punishPcAmount", u64],
        ["punishCoinAmount", u64],
        ["orderbookToInitTime", u64],

        ["swapBaseInAmount", u128],
        ["swapQuoteOutAmount", u128],
        ["swapQuoteInAmount", u128],
        ["swapBaseOutAmount", u128],
        ["swapQuote2BaseFee", u64],
        ["swapBase2QuoteFee", u64],

        ["baseVault", publicKey],
        ["quoteVault", publicKey],
        ["baseMint", publicKey],
        ["quoteMint", publicKey],
        ["lpMint", publicKey],

        ["modelDataAccount", publicKey],
        ["openOrders", publicKey],
        ["marketId", publicKey],
        ["marketProgramId", publicKey],
        ["targetOrders", publicKey],
        ["owner", publicKey],
        ["padding", blob(512)]
    ],
    (args) => args as RaydiumPoolV5,
    "RaydiumPoolV5"
);
