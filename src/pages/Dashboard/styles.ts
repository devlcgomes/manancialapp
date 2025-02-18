import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8f9fd;
`;

export const Sidebar = styled.aside`
  width: 260px;
  background: #fff;
  padding: 2rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    transform: translateX(-100%);
    
    &.open {
      transform: translateX(0);
    }
  }
  
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    
    h2 {
      color: #2d3748;
      font-size: 1.5rem;
    }

    .mobile-close {
      display: none;
      background: none;
      border: none;
      color: #4a5568;
      cursor: pointer;
      
      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      padding: 0.875rem 1rem;
      border-radius: 8px;
      border: none;
      background: transparent;
      color: #4a5568;
      transition: all 0.2s;

      &:hover {
        background: #f7fafc;
      }

      &.active {
        background: #6b46c1;
        color: #fff;
      }
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  margin-left: 260px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  .mobile-menu {
    display: none;
    background: none;
    border: none;
    color: #4a5568;
    cursor: pointer;
    
    @media (max-width: 768px) {
      display: block;
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
      gap: 0.5rem;
    }
  }
`;

export const WelcomeBanner = styled.div`
  background: linear-gradient(135deg, #6b46c1 0%, #805ad5 100%);
  border-radius: 16px;
  padding: 2rem;
  color: #fff;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
  }

  .welcome-text {
    h1 {
      font-size: 1.875rem;
      margin-bottom: 0.5rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    p {
      opacity: 0.9;
      @media (max-width: 768px) {
        font-size: 0.875rem;
      }
    }
  }

  .welcome-actions {
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }

    button {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.2s;

      @media (max-width: 768px) {
        width: 100%;
        padding: 0.625rem 1rem;
        font-size: 0.875rem;
      }

      &.primary {
        background: #fff;
        color: #6b46c1;
        border: none;
        &:hover {
          transform: translateY(-2px);
        }
      }

      &.secondary {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        &:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const StatCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .stat-content {
    flex: 1;

    h3 {
      color: #4a5568;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    .number {
      display: block;
      font-size: 1.875rem;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 0.25rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .trend {
      font-size: 0.875rem;
      color: #718096;

      &.positive {
        color: #48bb78;
      }
    }
  }
`;

export const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  &.purple {
    background: #6b46c1;
  }

  &.blue {
    background: #4299e1;
  }

  &.green {
    background: #48bb78;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  background: #6b46c1;
  color: #fff;
  border: none;
  font-weight: 500;
  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;

    span {
      display: none;
    }
  }

  &:hover {
    background: #805ad5;
    transform: translateY(-1px);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    color: var(--text);
    font-size: 1.125rem;
  }

  span {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--text-secondary);
  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 0.5rem;
    
    .logout-text {
      display: none;
    }
  }

  &:hover {
    background: #f5f5f5;
    color: #e63946;
  }
`;

export const Content = styled.main`
  padding: 2rem;
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h1 {
    color: var(--text);
    margin-bottom: 2rem;
  }
`;

export const ChartContainer = styled.div`
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h3 {
      color: var(--text);
    }

    select {
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text-secondary);
    }
  }
`;

export const RecentSection = styled.div`
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      color: var(--text);
    }

    button {
      color: var(--primary);
      background: none;
      border: none;
      font-weight: 500;
    }
  }
`;

export const MusicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MusicItem = styled.div`
  background: var(--white);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .music-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    strong {
      color: var(--text);
    }

    span {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }
  }

  .music-meta {
    display: flex;
    gap: 0.5rem;

    .tag {
      padding: 0.25rem 0.5rem;
      background: #F3F4F6;
      border-radius: 4px;
      font-size: 0.75rem;
      color: var(--text-secondary);
    }
  }
`; 