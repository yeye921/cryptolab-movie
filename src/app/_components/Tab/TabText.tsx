'use client';
import styled from 'styled-components';

interface TabTextProps {
  children: string;
  type: number;
  onClick?: () => void;
}

interface TabStylesProps {
  [key: string]: {
    color: string;
    borderBottomColor: string;
  };
}

export default function TabText({ children, type, onClick }: TabTextProps) {
  return (
    <TabTextStyle type={type} onClick={onClick}>
      {children}
    </TabTextStyle>
  );
}

const tabStyles: TabStylesProps = {
  1: {
    color: '#14077c',
    borderBottomColor: '#35c5ed',
  },
  2: {
    color: '#9e9ea4',
    borderBottomColor: '#9e9ea4',
  },
  3: {
    color: '#14077c',
    borderBottomColor: '#9e9ea4',
  },
};

const TabTextStyle = styled.div<{ type: number }>`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: ${({ type }) => tabStyles[type].color};
  cursor: pointer;
  transition: 0.25s;

  &:after {
    content: '';
    display: block;
    width: 64px;
    border-bottom: 1px solid ${({ type }) => tabStyles[type].borderBottomColor};
    margin: 3px 0px;
  }
`;
