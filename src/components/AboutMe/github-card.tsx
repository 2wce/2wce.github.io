import { CircleIcon, StarIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

export function DemoGithub() {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] gap-6 space-y-0 p-6">
        <CardTitle className="mt-0 p-2">shadcn/ui</CardTitle>
        <CardDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            TypeScript
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            20k
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
