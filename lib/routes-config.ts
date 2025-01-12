// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string
  href: string
  noLink?: true // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[]
}

export const ROUTES: EachRoute[] = [
  {
    title: "System Architecture",
    href: "/system-architecture",
    noLink: true,
    items: [
      { title: "Overview", href: "/overview" },
      { title: "Core Components", href: "/core-components" },
      { title: "Agent-Orchestrator Interaction", href: "/agent-orchestrator" },
      { title: "Plugin Integration", href: "/plugin-integration" },
    ],
  },
  {
    title: "Developing A Plugin",
    href: "/developing-a-plugin",
    noLink: true,
    items: [
      { title: "Plugin Basics", href: "/plugin-basics" },
      { title: "Advanced Plugin Features", href: "/advanced-features" },
    ],
  },
  // {
  //   title: "Developing An Agent",
  //   href: "/developing-an-agent",
  //   items: [
  //     { title: "Agent Basics", href: "/developing-an-agent/agent-basics" },
  //     { title: "Advanced Agent Development", href: "/developing-an-agent/advanced-development" },
  //   ],
  // },
  // {
  //   title: "Quickstart Guide",
  //   href: "/quickstart",
  //   items: [],
  // },
  // {
  //   title: "Advanced Development",
  //   href: "/advanced-development",
  //   items: [],
  // },
]

type Page = { title: string; href: string }

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = []
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href })
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` }
    ans.push(...getRecurrsiveAllLinks(temp))
  })
  return ans
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat()
