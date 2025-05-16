import {
  IconTrendingDown,
  IconTrendingUp,
  IconMinus,
  IconHexagonPlus,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  const cards = [
    {
      title: "Total Samples",
      value: "1000",
      trend: "100%",
      trendIcon: IconMinus,
      footerTitle: "Stable this month",
      footerSubtitle: "Visitors for the last 6 months",
      variant: "neutral",
    },
    {
      title: "Analyzed Samples",
      value: "1,234",
      trend: "20%",
      trendIcon: IconHexagonPlus,
      footerTitle: "Steady performance increase",
      footerSubtitle: "Meets growth projections",
      variant: "plus",
    },
    {
      title: "Passed Samples",
      value: "45,678",
      trend: "+12.5%",
      trendIcon: IconTrendingUp,
      footerTitle: "Strong user retention",
      footerSubtitle: "Engagement exceed targets",
      variant: "up",
    },
    {
      title: "Failed Samples",
      value: "4.5%",

      trend: "20%",
      trendIcon: IconTrendingDown,
      footerTitle: "Down 20% this period",
      footerSubtitle: "Acquisition needs attention",
      variant: "down",
    },
  ];

  // Function to determine badge, trend, and border colors based on variant
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "up":
        return {
          badgeClass:
            "bg-green-100 hover:bg-green-200 text-green-700 border-green-200",
          iconClass: "text-green-600",
          borderClass: "border-green-300",
        };
      case "plus":
        return {
          badgeClass:
            "bg-yellow-100 hover:bg-yellow-200 text-yellow-700 border-yellow-200",
          iconClass: "text-yellow-600",
          borderClass: "border-yellow-300",
        };
      case "down":
        return {
          badgeClass: "bg-red-100 hover:bg-red-200 text-red-700 border-red-200",
          iconClass: "text-red-600",
          borderClass: "border-red-300",
        };
      default: // neutral
        return {
          badgeClass:
            "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200",
          iconClass: "text-gray-600",
          borderClass: "border-gray-300",
        };
    }
  };

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cards.map((card, index) => {
        const { badgeClass, iconClass, borderClass } = getVariantStyles(
          card.variant
        );

        return (
          <Card
            key={index}
            className={`@container/card hover:shadow-md transition-shadow duration-300 border ${borderClass}`}
          >
            <CardHeader>
              <CardDescription>{card.title}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {card.value}
              </CardTitle>
              <CardAction>
                <Badge
                  variant="outline"
                  className={`transition-colors duration-300 ${badgeClass}`}
                >
                  <card.trendIcon className={iconClass} />
                  {card.trend}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {card.footerTitle}{" "}
                <card.trendIcon className={`size-4 ${iconClass}`} />
              </div>
              <div className="text-muted-foreground">{card.footerSubtitle}</div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
