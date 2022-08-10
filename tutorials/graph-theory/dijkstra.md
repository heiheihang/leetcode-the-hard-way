---
title: "Dijkstra's Algorithm"
description: "Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph."
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - dijkstra
  - algorithm
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';
import Table from '@site/src/components/Table';

<TutorialAuthors names="@wingkwong"/>

## Overview

Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph. It can only be used when the graphs have non-negative weights for all edges.

Let $$dist[u]$$ be the distance / cost / weight to reach node $$u$$. Initially, we use a priority queue to maintain the pair $$p$$ where $$p.first$$ is the node and $$p.second$$ is the cost. We set the distance from source to source is $$0$$ with $$0$$ cost and push the starting point to the priority queue.

The first run, the vertex is the source node. We remove it and check its neighbors. If the distance to the neighbor is greater than the current distance plus the cost, then it means a shorter path is found. Hence, we update it and push it to the priority queue for further process.

```cpp
template<typename T_pair, typename T_vector>
void dijkstra(T_pair &g, T_vector &dist, int start) {
  priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
  dist[start] = 0;
  pq.push({start, 0});
  while (!pq.empty()) {
    auto [u_node, u_cost] = pq.top(); pq.pop();
    if (u_cost > dist[u_node]) continue;
    for (auto [v_node, v_cost] : g[u_node]) {
      if (dist[v_node] > dist[u_node] + v_cost) {
        dist[v_node] = dist[u_node] + v_cost;
        pq.push({v_node, dist[v_node]});
      }
    }
  }
}
```

export const suggestedProblems = [
  {
    "problemName": "0743 - Network Delay Time",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/network-delay-time/",
    "solutionLink": "../../solutions/0700-0799/network-delay-time-medium"
  },
  {
    "problemName": "1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
    "solutionLink": "../../solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />