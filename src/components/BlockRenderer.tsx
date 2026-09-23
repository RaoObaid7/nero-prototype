import React from "react";
import { FAQItem } from "./FAQItem";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface BlockProps {
  block: any;
}

export function BlockRenderer({ block }: BlockProps) {
  if (!block || !block.blockType) return null;

  switch (block.blockType) {
    case "richText":
      return (
        <div className="block-richtext" style={{ marginBottom: "2rem" }}>
          {block.content && <RichText data={block.content} />}
        </div>
      );

    case "hero":
      return (
        <section className="block-hero">
          <h1>{block.heading}</h1>
          {block.subheading && <p className="lead">{block.subheading}</p>}
          {block.ctaText && block.ctaLink && (
            <a href={block.ctaLink} className="btn primary">{block.ctaText}</a>
          )}
        </section>
      );

    case "imageAndText":
      return (
        <section className={`block-image-text image-${block.imagePosition || 'left'}`}>
          {block.heading && <h2>{block.heading}</h2>}
          <div className="text-content">{block.body}</div>
        </section>
      );

    case "callout":
      return (
        <blockquote className={`block-callout callout-${block.type || 'info'}`}>
          <p>"{block.content}"</p>
          {block.attribution && <cite>— {block.attribution}</cite>}
        </blockquote>
      );

    case "faq":
      return (
        <section className="block-faq">
          <h2>{block.heading || "Frequently Asked Questions"}</h2>
          <div className="faq-grid">
            {block.items?.map((item: any, idx: number) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>
      );

    case "callToAction":
      return (
        <section className="block-cta">
          <h2>{block.heading}</h2>
          {block.text && <p>{block.text}</p>}
          {block.primaryButtonText && block.primaryButtonLink && (
            <a href={block.primaryButtonLink} className="btn primary">{block.primaryButtonText}</a>
          )}
        </section>
      );

    default:
      return (
        <div className="block-unknown">
          <p><em>[Block: {block.blockType}]</em></p>
        </div>
      );
  }
}
