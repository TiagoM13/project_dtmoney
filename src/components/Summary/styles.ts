import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.background-green {
      background: var(--green);
      color: #fff;
    }
  }

  @media (max-width: 920px) {
    gap: 0.875rem;
  }

  @media (max-width: 780px) {
    div {
      strong {
        font-size: 1.625rem;
      }
    }
  }

  @media (max-width: 640px) {
    div {
      strong {
        font-size: 1.45rem;
      }
    }
  }

  @media (max-width: 580px) {
    grid-template-columns: none;

    div {
      strong {
        font-size: 1.8rem;
      }
    }
  }
`;
