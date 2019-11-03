#!/usr/bin/env python
points = [40, 100, 43, 874, 37, 78]

# def minimum_value(points):
#   smallest_value = points[0]
#   for i in range(1, len(points)):
#     if smallest_value >= points[i]:
#       smallest_value = points[i]
#   return smallest_value
# 0 => 40

def minimum_value(points):
  index = 0
  smallest_value = points[index]

  index += 1
  while index < len(points):
    point_value = points[index]
    if smallest_value >= point_value:
      smallest_value = point_value
    index += 1

  return smallest_value

print(minimum_value(points))

