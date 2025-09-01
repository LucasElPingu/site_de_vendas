"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./header.module.css";

export default function Brand() {
  const [iconSrc, setIconSrc] = useState<string>("/logo.png");

  return (
    <>
      <Image
        src={iconSrc}
        alt="Can Say - logo"
        width={64}
        height={64}
        priority
        className={styles.brandImg}
        onError={() => setIconSrc("/images/icon.jpg")}
      />
      <h1 className={styles.brandTxt}>CAN SAY</h1>
    </>
  );
}
