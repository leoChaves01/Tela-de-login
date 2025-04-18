import dynamic from 'next/dynamic';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import Link from 'next/link';
import AuthActions from '../actions/auth-actions';

// Importação dinâmica para evitar erro de módulo não encontrado
const Button = dynamic(() => import('../../../components/ui/button').then(mod => mod.Button), {
  ssr: false,
});
const buttonVariants = dynamic(() => import('../../../components/ui/button').then(mod => mod.buttonVariants), {
  ssr: false,
});

export default function SignUpForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cadastre-se</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para criar conta.
        </CardDescription>
      </CardHeader>
      <form action={AuthActions.createAccount}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Criar Conta</Button>
          <Link
            href="/portal/login"
            className={buttonVariants({ variant: 'link' })}
          >
            Já Tenho Conta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
