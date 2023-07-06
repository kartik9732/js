import java.util.*;
public class Sum_of_range {
    public static int check(int min,int max){
        int sum=0;
        for(int i=min;i<=max;i++){
            sum=sum+i;
        }
        return sum;
    }
   public static void main(String[] args) {
    int min=3;
    int max=7;
    System.out.println(check(min,max));
   } 
}
