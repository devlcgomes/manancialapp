import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Container, 
  Header, 
  UserInfo, 
  Content,
  LogoutButton,
  Sidebar,
  MainContent,
  StatsGrid,
  StatCard,
  ChartContainer,
  RecentSection,
  MusicList,
  MusicItem,
  WelcomeBanner,
  StatIcon,
  ActionButton
} from './styles';
import { 
  SignOut, 
  Users, 
  Calendar, 
  ChartLineUp, 
  MusicNote, 
  List, 
  X,
  Plus,
  ArrowRight,
  Microphone,
  UsersThree,
  Clock
} from '@phosphor-icons/react';

export function Dashboard() {
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <Container>
      <Sidebar className={isSidebarOpen ? 'open' : ''}>
        <div className="logo">
          <h2>Manancial</h2>
          <button 
            className="mobile-close"
            onClick={handleCloseSidebar}
          >
            <X size={24} />
          </button>
        </div>
        
        <nav>
          <button 
            className={activeSection === 'overview' ? 'active' : ''} 
            onClick={() => setActiveSection('overview')}
          >
            <ChartLineUp size={24} />
            Visão Geral
          </button>
          <button>
            <MusicNote size={24} />
            Repertório
          </button>
          <button>
            <Calendar size={24} />
            Ensaios
          </button>
          <button>
            <Users size={24} />
            Equipe
          </button>
        </nav>
      </Sidebar>

      <MainContent>
        <Header>
          <button 
            className="mobile-menu"
            onClick={handleToggleSidebar}
          >
            <List size={24} />
          </button>
          <UserInfo>
            <strong>Bem-vindo(a)</strong>
            <span>{user?.email}</span>
          </UserInfo>
          <div className="header-actions">
            <ActionButton>
              <Plus size={20} />
              Nova Música
            </ActionButton>
            <LogoutButton onClick={handleLogout}>
              <SignOut size={24} />
              <span className="logout-text">Sair</span>
            </LogoutButton>
          </div>
        </Header>

        <Content>
          <WelcomeBanner>
            <div className="welcome-text">
              <h1>Olá, {user?.displayName || 'Músico'}!</h1>
              <p>Confira as novidades do seu ministério hoje</p>
            </div>
            <div className="welcome-actions">
              <button className="primary">Agendar Ensaio</button>
              <button className="secondary">Ver Repertório</button>
            </div>
          </WelcomeBanner>
          
          <StatsGrid>
            <StatCard>
              <StatIcon className="purple">
                <MusicNote size={24} />
              </StatIcon>
              <div className="stat-content">
                <h3>Músicas no Repertório</h3>
                <span className="number">156</span>
                <span className="trend positive">+12 este mês</span>
              </div>
            </StatCard>
            
            <StatCard>
              <StatIcon className="blue">
                <UsersThree size={24} />
              </StatIcon>
              <div className="stat-content">
                <h3>Membros Ativos</h3>
                <span className="number">24</span>
                <span className="trend">2 ausentes</span>
              </div>
            </StatCard>
            
            <StatCard>
              <StatIcon className="green">
                <Clock size={24} />
              </StatIcon>
              <div className="stat-content">
                <h3>Próximo Ensaio</h3>
                <span className="date">Sábado, 24 Fev</span>
                <span className="time">19:00</span>
              </div>
            </StatCard>
          </StatsGrid>

          <ChartContainer>
            <div className="chart-header">
              <div className="chart-title">
                <h3>Músicas mais tocadas</h3>
                <span className="subtitle">Análise de repertório</span>
              </div>
              <select className="chart-period">
                <option>Últimos 7 dias</option>
                <option>Último mês</option>
                <option>Último ano</option>
              </select>
            </div>
            {/* Aqui vamos adicionar o gráfico depois */}
          </ChartContainer>

          <RecentSection>
            <div className="section-header">
              <div className="title-group">
                <h3>Músicas Recentes</h3>
                <span className="subtitle">Últimas adições ao repertório</span>
              </div>
              <button className="view-all">
                Ver todas
                <ArrowRight size={16} />
              </button>
            </div>
            
            <MusicList>
              <MusicItem>
                <div className="music-info">
                  <strong>Só Tu És Santo</strong>
                  <span>Adicionada em 15 Fev</span>
                </div>
                <div className="music-meta">
                  <span className="tag">Tom: E</span>
                  <span className="tag">BPM: 72</span>
                  <button className="action-btn">
                    <Microphone size={16} />
                    Ensaiar
                  </button>
                </div>
              </MusicItem>
              {/* Mais itens aqui */}
            </MusicList>
          </RecentSection>
        </Content>
      </MainContent>
    </Container>
  );
} 