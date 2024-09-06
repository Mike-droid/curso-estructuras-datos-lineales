import heapq
from typing import List

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        for point in points:
            x, y = point
            square_distance = x*x + y*y
            heapq.heappush(heap, (-square_distance, point))
            if len(heap) > k:
                heapq.heappop(heap)
        return [point for _, point in heap]

