# Direction Sense

## 1. Basic Directions

```
Four main directions: North, South, East, West
Four intermediate directions: North-East, North-West, South-East, South-West
```

## 2. Standard Direction Layout

```
        N
        |
W ----- + ----- E
        |
        S
```

## 3. Left and Right Turn Rules

```
Facing North, turn right → facing East
Facing North, turn left → facing West
Facing East, turn right → facing South
Facing East, turn left → facing North
Facing South, turn right → facing West
Facing South, turn left → facing East
Facing West, turn right → facing North
Facing West, turn left → facing South
```

A 90° turn changes direction by one step in the above cycle. A 180° turn means facing the exact opposite direction.

## 4. Opposite Directions

```
North ↔ South
East ↔ West
North-East ↔ South-West
North-West ↔ South-East
```

## 5. Finding Final Position

```
Step 1: Track movement step-by-step on a mental (or rough) grid
Step 2: Treat movement in a direction as adding/subtracting coordinates
   - Moving East/West changes horizontal position
   - Moving North/South changes vertical position
Step 3: Use the final horizontal and vertical change to find straight-line distance
```

## 6. Shortest Distance Formula

Once the net horizontal and vertical displacement are known, the straight-line (shortest) distance from the starting point is found using the Pythagoras rule.

```
Shortest distance = √(Horizontal displacement² + Vertical displacement²)
```

## 7. Shadow-Based Direction Rules

```
In the morning, the sun rises in the East, so shadows fall towards the West
In the evening, the sun is in the West, so shadows fall towards the East
At noon, the shadow is shortest (depends on hemisphere, usually negligible in basic problems)
```