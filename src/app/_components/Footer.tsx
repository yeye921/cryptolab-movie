'use client';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '/public/HEAAN_LOGO.png';

export default function Footer() {
  const text = '© 2024 CryptoLab Inc. All Rights Reserved';
  return (
    <Container>
      <Image src={logo} alt='logo' width='196' height='56' />
      <Label>{text}</Label>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  min-height: 140px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eeeeee;
  margin-top: auto;
`;

const Label = styled.span`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #9e9ea4;
`;
