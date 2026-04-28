import Timeline from "./components/Timeline.jsx";
import Always from "../public/Always.svg";
import Cost from "../public/Cost.svg";
import Days from "../public/Days.svg";
import Dedicated from "../public/Dedicated.svg";
import Long from "../public/Long.svg";
import Uk from "../public/Uk.svg";

const timelineData = {
  headingLines: [
    "WHY US COMPANIES SWITCH",
    "THEIR CALL CENTER OUTSOURCING TO US",
  ],
  items: [
    {
      id: "days-to-go-live",
      highlight: "14",
      title: "Days to go Live",
      description: (
        <>
          Traditional UK <strong>BPO outsourcing services</strong> take 3-6
          months to onboard. We get your team live - trained, GDPR-signed,
          integrated - in 14 business days.
        </>
      ),
      icon: Days,
      color: "#FF0000",
    },
    {
      id: "cost-reduction",
      highlight: "60%",
      title: "Cost Reduction vs. UK In-House",
      description:
        "Full-time UK contact centre staff costs \u00a328k-\u00a350k per agent annually. When you outsource customer service to RadicalMinds, you get the same quality for a fraction of the cost.",
      icon: Cost,
      color: "#38BAEB",
    },
    {
      id: "uk-gdpr-native",
      highlight: "24/7",
      title: "UK GDPR Native",
      description:
        "We are structured as a GDPR-compliant Data Processor. DPA signed on Day 1. ICO-aligned processes. SAR support within 30 days. Built in, not bolted on.",
      icon: Uk,
      color: "#2BB25C",
    },
    {
      id: "dedicated-account-manager",
      highlight: "1",
      title: "Dedicated UK Account Manager",
      description:
        "A UK-based account manager who knows your business, your call centre support metrics, and your customers. Directly reachable - not through a ticket queue.",
      icon: Dedicated,
      color: "#F58A45",
    },
    {
      id: "long-term-tie-ins",
      highlight: "0",
      title: "Long-Term Tie-Ins",
      description: (
        <>
          Flexible arrangements with reasonable notice periods. Scale your{" "}
          <strong>call centre outsourcing</strong> up or down as needed. No
          punishing exit clauses. No auto-renewal traps.
        </>
      ),
      icon: Long,
      color: "#FF0000",
    },
    {
      id: "always-on-coverage",
      highlight: "\u221e",
      title: "Always-On UK Coverage",
      description: (
        <>
          Out-of-hours, weekends, UK bank holidays - your customers get the same
          quality <strong>BPO customer support</strong> at any hour. AI handles
          overnight Tier 1 automatically.
        </>
      ),
      icon: Always,
      color: "#38BAEB",
    },
  ],
};

export default function App() {
  return <Timeline data={timelineData} />;
}
