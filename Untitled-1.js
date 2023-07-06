

// User function Template for Java

class Solution {
    static int shortestXYDist(ArrayList<ArrayList<Character>> grid, int N, int M) {
        
        ArrayList<int[]> list1 = new ArrayList<>();
        ArrayList<int[]> list2 = new ArrayList<>();
        
        for(int i=0; i<N; i++){
            for(int j=0; j<M; j++){
                if(grid.get(i).get(j) == 'X'){
                    list1.add(new int[]{i,j});
                }
                else if(grid.get(i).get(j) == 'Y'){
                    list2.add(new int[]{i,j});
                }
            }
        }
        
        int ans = Integer.MAX_VALUE;
        
        for(int[] arr : list1){
            for(int[] arr1 : list2){
                ans = Math.min(ans,Math.abs(arr[0]-arr1[0]) + Math.abs(arr[1]-arr1[1]));
            }
        }
        
        return ans;
        
    }
};