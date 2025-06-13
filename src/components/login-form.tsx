import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { ChartLine, Shield } from "lucide-react";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <Image
            src="/logo.png"
            className="mx-auto"
            alt="Logo"
            width={200}
            height={200}
          />
          <CardTitle className="text-2xl font-bold">WACCBIP</CardTitle>
          <CardDescription>Sample Management System</CardDescription>
          <CardTitle className="mt-6 text-2xl font-bold">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Enter your credentials to access the lab dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                  />
                </div>
                <Link href="/dashboard">
                  <Button type="submit" className="w-full ">
                    Sign In
                  </Button>
                </Link>
                {/* <Button
                  type="submit"
                  variant="secondary"
                  className="w-full text-white"
                >
                  Register
                </Button> */}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="flex gap-4 items-center justify-center">
        <span className="flex items-center gap-0.5">
          {" "}
          <Shield />
          Secure
        </span>
        <span className="flex items-center gap-0.5">
          {" "}
          <ChartLine />
          Real-time
        </span>
      </div>
    </div>
  );
}
