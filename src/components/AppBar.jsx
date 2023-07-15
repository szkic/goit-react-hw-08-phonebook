import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="flex justify-between">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
