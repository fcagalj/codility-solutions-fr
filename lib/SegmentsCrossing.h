//
//  Playground.h
//  Codillity - The LOGO Turttle task
//
//  Created by Daniel Bonates on 6/16/15.
//  Copyright (c) 2015 Daniel Bonates. All rights reserved.
//
/*

Situation:

A turtle starts at (0, 0) on a cartesian graph.
We have a non-empty zero-indexed "moves" list that contains numbers.
Each number represents the distance moved.
The first number is the distance north, the second is the distance east, the third is the distance south, the fourth is the distance west, and repeats like this forever. Therefore the directions cycle every four moves.
Goal:

Find an algorithm that gives the move number that makes the turtle cross a point that it has already visited before.

The move number is the index of the "moves" list.

This algorithm should preferably be O(n).

Example:

If given this move list: [1, 3, 2, 5, 4, 4, 6, 3, 2]

The move number answer is then 6. (It's the 7th move).

Draw it on a graph, the turtle will go:

(0,0) -> (0,1) -> (3,1) -> (3,-1) -> (-2,-1) -> (-2,3) -> (2,3) -> (2,-3)

At this 6 move number (7th move) it will meet (2,1) which is a point that the turtle has already crossed.

*/
#ifndef Codillity_Playground_h
#define Codillity_Playground_h

BOOL isBetween(int valueToTest, int limitOne, int limitTwo) {
    
    if (limitOne > limitTwo) {
        return (limitTwo <= valueToTest && valueToTest <= limitOne);
    } else {
        return (limitOne <= valueToTest && valueToTest <= limitTwo);
    }
}

int playground(NSMutableArray *stepsArray) {
    
    // NSLog(@"stepsArr: [%@]", [stepsArray componentsJoinedByString:@","] );
    
    int cx = 0;
    int cy = 0;
    
    int len = (int)[stepsArray count];
    
    // array with x and y position on grid
    NSMutableArray *deltaArray = [NSMutableArray array];
    
    for (int i=0; i<len; i++) {
        
        int direction = i%4;
        
        switch (direction) {
            case 0: // going NORTH
                cy -= [stepsArray[i] integerValue];
                [deltaArray addObject:@(cy)];
                break;
                
            case 1: // going EAST
                cx += [stepsArray[i] integerValue];
                [deltaArray addObject:@(cx)];
                break;
                
            case 2: //going SOUTH
                cy += [stepsArray[i] integerValue];
                [deltaArray addObject:@(cy)];
                break;
                
            case 3: //going WEST
                cx -= [stepsArray[i] integerValue];
                [deltaArray addObject:@(cx)];
                break;
                
            default:
                break;
        }
    }
    
    // array de deltas produzidos
    // NSLog(@"deltaArray: [%@]\n\n", [deltaArray componentsJoinedByString:@","] );
    
    
    // testing starting from third (the first that could colide, with the first vertical in this case)
    for (int i=3; i< len; i++) {
        
        
        //check if will test horizontal colliding or vertical
        // 0, stands for vertical, 1 for horizontal
        int orientation = i%2;
        
        if (orientation == 0) { //vertical
            
            // the x value for this vertical segment is equal do the x from previous one
            int segmentX = [deltaArray[i-1] intValue];
            
            // NSLog(@"- testing vertical segment at index: %d, myX = %d:", i, segmentX);
            
            //loop from first horizontal to here
            // j is the horizontal segment
            int previousValue;
            
            for (int j=1; j < i; j+=2) {
                
                
                
                // first test, cant be adjacents
                if (j != (i-1) && j != (i+1)) {
                    
                    if (j < 2) {
                        previousValue = 0;
                    } else {
                        previousValue = [deltaArray[j-2] intValue];
                    }
                    
                    // trying to find if my x (segmentX) is between the values: previousValue e [deltaArray[j] intValue]
                    
                    if (isBetween(segmentX, [deltaArray[j] intValue], previousValue)) {
                        
                        // NSLog(@"\tok, found candidate horizontal contains myX at index %d", j);
                        
                        // that horizontal segment contains my x,
                        // now I should check for y interpolation
                        
                        // the y for current horizontal candidate for colision,
                        // is the y value before this index on delta array
                        
                        int canditateY;
                        canditateY = [deltaArray[j-1] intValue];
                        
                        // the Y of this horizontal segment found (canditateY), must me in my y range, between [deltaArray[i] intValue] and [deltaArray[i-2] intValue]
                        
                        
                        if (isBetween(canditateY, [deltaArray[i] intValue], [deltaArray[i-2] intValue])) {
                            // the candidate Y has been found on current range of y for this segment
                            // NSLog(@"\t\t***** FOUND SEGMENT THAT CROSS at index step %d", (i+1));
                            return (i+1);
                        }
                    }
                }
            }
            
        }
        else if (orientation == 1) { //horizontal
            
            int segmentY = [deltaArray[i-1] intValue];
            
            // NSLog(@"- testing horizontal in index: %d, myY = %d:", i, segmentY);
            
            //loop from first vertical to here
            // j is the vertical segment
            int previousValue;
            
            // test which includes my x
            for (int j=0; j < i; j+=2) {
                
                if (j<1) {
                    previousValue = 0;
                } else {
                    previousValue = [deltaArray[j-2] intValue];
                }
                
                // first test, cant be adjacents
                if (j != (i-1) && j != (i+1)) {
                    if (isBetween(segmentY, [deltaArray[j] intValue], previousValue)) {
                        
                        // NSLog(@"\tcandidate vertical contains myY at index %d", j);
                        
                        // that vertical segment contains my y,
                        // now I should check for x interpolation
                        
                        // the x for current vertical candidate for colision,
                        // is the x value before this index on delta array
                        
                        int canditateX;
                        if (j<1) {
                            canditateX = 0;
                        } else {
                            canditateX = [deltaArray[j-1] intValue];
                        }
                        
                        if (isBetween(canditateX, [deltaArray[i] intValue], [deltaArray[i-2] intValue])) {
                            // the candidate X has been found on current range of x for this segment
                            // NSLog(@"\t\t***** FOUND SEGMENT THAT CROSS at index step %d", (i+1));
                            return (i+1);
                        }
                    }
                }
            }
        }
        
        // NSLog(@"- no colision with this segment");
    }
    
    return -1;
}


#endif
