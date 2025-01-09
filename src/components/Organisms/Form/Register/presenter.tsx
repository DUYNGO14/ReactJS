import { Link } from "react-router";
import { IAuth } from "@/interfaces";
import { Box, Input, Label, Button } from "@/components/Atoms";

interface RegisterPresenterProps {
  user: IAuth.RegisterRequest;
  onSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  error: string;
}

const RegisterPresenter: React.FC<RegisterPresenterProps> = ({
  user,
  onSubmit,
  handleChange,
  loading,
  error,
}) => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Box className="max-w-sm mt-8 w-full text-gray-600 space-y-5 px-6">
        <Box className="text-center pb-8">
          <Box className="flex flex-col items-center">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Register Account
            </h3>
            <img
              src="https://www.pngkey.com/png/full/64-643451_manchester-united-logo-png.png"
              alt="Avatar"
              className="mt-1 w-[60px] h-[60px] rounded-full"
            />
          </Box>
        </Box>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <Box>
            <Label className="font-medium" htmlFor="email" text="Email" />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border rounded-lg shadow-sm"
            />
          </Box>
          <Box>
            <Label className="font-medium" htmlFor="password" text="Password" />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border rounded-lg shadow-sm"
            />
          </Box>
          {error && <p className="text-red-600">{error}</p>}
          <Button
            disabled={!user.email || !user.password || loading}
            onClick={onSubmit}
            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
              loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            {loading ? "Loading..." : "Register"}
          </Button>
          <Button className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg">
            <Link to="/">Go back home</Link>
          </Button>
        </form>
        <p className="text-center">
          Do have an account?{" "}
          <Link to="/login" className="text-indigo-600">
            Login
          </Link>
        </p>
      </Box>
    </main>
  );
};

export default RegisterPresenter;
