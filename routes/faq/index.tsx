import React from "react";
import Accordion from "../../islands/Accordion.tsx";

export default function FAQ() {
  return (
    <div
      className={"text-[#CCCCCC] flex flex-col gap-16 md:gap-36 py-24 md:py-48"}
    >
      <section className={"text-center max-w-5xl mx-auto"}>
        <h1 className={"text-4xl md:text-7xl font-bold"}>
          <span
            className={"bg-clip-text text-transparent bg-gradient-to-r from-[#CCCCCC] via-[#999999] to-[#666666]"}
          >
            YOU'VE GOT QUESTIONS
          </span>
          <br />
          WE'VE GOT ANSWERS
        </h1>
        <p className={"text-base md:text-3xl font-medium"}>
          New to Bitcoin Stamps? Curious to know more? Explore our comprehensive FAQ to understand this innovative technology built on Bitcoin.
        </p>
      </section>

      <section className={"flex flex-col gap-6 md:gap-12"}>
        <div>
          <h1
            className={"text-3xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#666666] to-[#999999] mb-2"}
          >
            BITCOIN STAMPS
          </h1>
          <h2 className={"text-2xl md:text-5xl font-extralight mb-3"}>
            PERMANENCE FOR PERPETUITY
          </h2>
          <p className={"text-sm md:text-lg font-medium"}>
            Bitcoin Stamps are NFTs built on the Counterparty protocol since 2014, providing a way to store data directly on the Bitcoin blockchain, ensuring permanence and immutability. Here's an overview of the various stamp types and their historical significance:
          </p>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"}>
          <Accordion title="CLASSIC STAMPS">
            <p className={"text-sm md:text-lg font-medium"}>
              Classic Stamps are NFTs built on Counterparty standards from 2014. Originally intended to be 1:1, creators can now issue billions of tokens per stamp. Initially, transactions utilized OP_MULTISIG and Base64 encoding, but newer formats like OLGA and P2WSH are now included. The goal was to prevent accidental spending and improve the resilience of Ordinals data. The first Bitcoin Stamp (Stamp 0) was created by Mikeinspace at Block 779652.
            </p>
          </Accordion>

          <Accordion title="SRC-20">
            <p className={"text-sm md:text-lg font-medium"}>
              SRC-20 is a fungible token protocol that directly embeds transactions on Bitcoin without relying on Counterparty, as of block 796,000. Modeled after BRC-20, this layer only incurs standard BTC miner fees and ensures the immutability of the data. The first official SRC-20 token (KEVIN) was deployed by Reinamora in Block 788041. It's an evolution from proof-of-concept into a direct-to-Bitcoin protocol for efficiency and security.
            </p>
          </Accordion>

          <Accordion title="SRC-721">
            <p className={"text-sm md:text-lg font-medium"}>
              SRC-721 is a fungible token system focused on low-cost minting of NFTs on Bitcoin. It supports layered storage, reducing minting costs by referencing on-chain data through JSON files and ensuring long-term immutability. The first SRC-721 token (KEVIN) was deployed in Block 788041, modeled after BRC-20 but optimized for efficiency and data integrity via the STAMPS protocol.
            </p>
          </Accordion>

          <Accordion title="SRC-721r">
            <p className={"text-sm md:text-lg font-medium"}>
              SRC-721r is an evolution of the SRC-721 standard, allowing for recursive NFT creation by leveraging multiple layers of images. This allows developers to build complex images with data stored across several transactions on Stamps. Its structure maximizes cost efficiency, making it suitable for larger, more detailed art collections.
            </p>
          </Accordion>

          <Accordion title="SRC-101">
            <p className={"text-sm md:text-lg font-medium"}>
              SRC-101 introduces a domain name system on Bitcoin Stamps, solving the challenge of UTXO-linked assets and ensuring immutability. Unlike regular UTXO-based assets, SRC-101 names are stamped directly onto the Bitcoin blockchain, allowing for permanent records tied to user addresses. The standard prevents unintentional spending by separating stamp assets from BTC holdings.
            </p>
          </Accordion>

          <Accordion title="OLGA">
            <p className={"text-sm md:text-lg font-medium"}>
              OLGA is a new encoding format within the Stamps protocol, which eliminates the need for Base64 encoding. It reduces the transaction size by up to 50% and the cost of minting by 60-70%, maintaining all original functionality. OLGA's first implementation happened in Block 833000. It improves storage efficiency for images on the Bitcoin blockchain, enhancing accessibility and reducing fees.
            </p>
          </Accordion>

          <Accordion title="POSH STAMPS">
            <p className={"text-sm md:text-lg font-medium"}>
              POSH Stamps are an advanced version of cursed stamps integrated with the Counterparty asset-naming system. They allow for wrapping and vaulting other Bitcoin-based assets, such as Runes, Ordinals, and SRC-20, to prevent accidental loss and improve tradability. This enables easier trading on decentralized exchanges and future cross-protocol integration use cases.
            </p>
          </Accordion>
        </div>
      </section>

      <section className={"flex flex-col gap-6 md:gap-12"}>
        <div>
          <h1
            className={"text-3xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#666666] to-[#999999] mb-2"}
          >
            GET STARTED
          </h1>
          <h2 className={"text-2xl md:text-5xl font-extralight mb-3"}>
            BEGIN YOUR BITCOIN STAMPS JOURNEY
          </h2>
          <p className={"text-sm md:text-lg font-medium"}>
            Ready to dive into the world of Bitcoin Stamps? Here's what you need to know to get started.
          </p>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"}>
          <Accordion title="COMPATIBLE WALLETS">
            <p className={"text-sm md:text-lg font-medium"}>
              To start creating, sending, and storing Bitcoin Stamps, you'll need a compatible wallet. Some options include:
              <ul className="list-disc list-inside mt-2">
                <li>Unisat</li>
                <li>Xverse</li>
                <li>Hiro</li>
              </ul>
            </p>
          </Accordion>

          <Accordion title="FUND YOUR WALLET">
            <p className={"text-sm md:text-lg font-medium"}>
              Ensure that your wallet has enough Bitcoin to cover the cost of transactions and inscription fees, which depend on data size and network congestion.
            </p>
          </Accordion>

          <Accordion title="CREATE AND SEND STAMPS">
            <p className={"text-sm md:text-lg font-medium"}>
              1. Choose a compatible wallet.<br/>
              2. Inscribe the data by calculating transaction fees based on data size and current network conditions.<br/>
              3. Broadcast the transaction to the Bitcoin network and wait for confirmation.
            </p>
          </Accordion>

          <Accordion title="SUPPORTED FILES AND SIZES">
            <p className={"text-sm md:text-lg font-medium"}>
              You can stamp various file types, including images, text, and metadata, directly onto the Bitcoin blockchain. File size limitations depend on the format (e.g., OLGA encoding) and network conditions, as larger files incur higher fees.
              <ul className="list-disc list-inside mt-2">
                <li>Classic Stamp Format: Uses OP_MULTISIG and Base64 encoding.</li>
                <li>OLGA: Newer format that reduces file size and fees.</li>
              </ul>
            </p>
          </Accordion>
        </div>
      </section>

      <section className={"flex flex-col gap-6 md:gap-12"}>
        <div>
          <h1
            className={"text-3xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#666666] to-[#999999] mb-2"}
          >
            BUYING AND SELLING
          </h1>
          <h2 className={"text-2xl md:text-5xl font-extralight mb-3"}>
            NAVIGATE THE STAMP MARKETPLACE
          </h2>
          <p className={"text-sm md:text-lg font-medium"}>
            Learn how to buy and sell Bitcoin Stamps efficiently and securely.
          </p>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"}>
          <Accordion title="STAMP DISPENSERS">
            <p className={"text-sm md:text-lg font-medium"}>
              Stamp dispensers provide an easy way to buy Bitcoin Stamps from a seller or marketplace. Simply enter the number of Stamps you want and the amount of BTC required, then complete the transaction. For selling, you can set up a dispenser to automate the process of selling your Stamps.
            </p>
          </Accordion>

          <Accordion title="FRONTRUNNING AWARENESS">
            <p className={"text-sm md:text-lg font-medium"}>
              Be mindful of "frontrunning" on popular Stamp sales, where bots or fast transactions may acquire Stamps ahead of you. Use timing strategies or direct transactions to reduce this risk.
            </p>
          </Accordion>

          <Accordion title="CREATING COLLECTIONS">
            <p className={"text-sm md:text-lg font-medium"}>
              To create a collection, stamp a series of related assets, ensuring they're inscribed with consistent metadata and styles. This can help you organize and showcase your art or project.
            </p>
          </Accordion>

          <Accordion title="GET FEATURED">
            <p className={"text-sm md:text-lg font-medium"}>
              To get your collection featured on popular marketplaces, ensure it meets certain criteria such as originality, completeness, and proper metadata stamping.
            </p>
          </Accordion>
        </div>
      </section>

      <section className={"flex flex-col gap-6 md:gap-12"}>
        <div>
          <h1
            className={"text-3xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#666666] to-[#999999] mb-2"}
          >
            SRC-20 TOOLS
          </h1>
          <h2 className={"text-2xl md:text-5xl font-extralight mb-3"}>
            LEVERAGE FUNGIBLE TOKENS ON BITCOIN
          </h2>
          <p className={"text-sm md:text-lg font-medium"}>
            Explore the capabilities of SRC-20 tokens built directly on the Bitcoin blockchain.
          </p>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"}>
          <Accordion title="DEPLOYING SRC-20 TOKENS">
            <p className={"text-sm md:text-lg font-medium"}>
              To deploy an SRC-20 token, inscribe the transaction on Bitcoin with the token's supply and metadata. This makes the token immutable and secured by Bitcoin's blockchain.
            </p>
          </Accordion>

          <Accordion title="MINTING SRC-20 TOKENS">
            <p className={"text-sm md:text-lg font-medium"}>
              After deployment, token holders can mint additional SRC-20 tokens based on the initial supply set in the contract.
            </p>
          </Accordion>

          <Accordion title="TRANSFERRING SRC-20 TOKENS">
            <p className={"text-sm md:text-lg font-medium"}>
              Transfer SRC-20 tokens between addresses using a compatible wallet. Ensure that fees are calculated based on data size and network congestion.
            </p>
          </Accordion>
        </div>
      </section>

      <section className={"flex flex-col gap-6 md:gap-12"}>
        <div>
          <h1
            className={"text-3xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#666666] to-[#999999] mb-2"}
          >
            GENERAL FAQ
          </h1>
          <h2 className={"text-2xl md:text-5xl font-extralight mb-3"}>
            COMMON QUESTIONS ANSWERED
          </h2>
          <p className={"text-sm md:text-lg font-medium"}>
            Find answers to frequently asked questions about Bitcoin Stamps.
          </p>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"}>
          <Accordion title="BENEFITS OVER OTHER PROTOCOLS">
            <p className={"text-sm md:text-lg font-medium"}>
              Stamps provide a more permanent and immutable solution for data storage compared to other protocols like Bitcoin Ordinals. Stamps ensure the data remains a part of the Bitcoin blockchain forever, making it highly resistant to changes in third-party platforms or protocols.
            </p>
          </Accordion>

          <Accordion title="SECURITY OF BITCOIN STAMPS">
            <p className={"text-sm md:text-lg font-medium"}>
              Yes, Stamps leverage the Bitcoin blockchain's Proof-of-Work (PoW) consensus mechanism, making the data tamper-proof once confirmed. This ensures long-term data security.
            </p>
          </Accordion>

          <Accordion title="COMPARISON TO BITCOIN ORDINALS">
            <p className={"text-sm md:text-lg font-medium"}>
              While both protocols enable data storage on the Bitcoin network, Stamps are more focused on permanent and immutable storage by embedding data directly into the blockchain.
            </p>
          </Accordion>

          <Accordion title="TRADING AND SELLING STAMPS">
            <p className={"text-sm md:text-lg font-medium"}>
              Yes, Bitcoin Stamps can be traded or sold, similar to NFTs. However, the trading process is contingent on wallet support and platform integration. Some marketplaces are exploring ways to trade Stamps more efficiently.
            </p>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

