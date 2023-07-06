public class PartitionArray {
    int i=0;
    int j=n-1;
    int temp;
    while(i<j){
        while(a[i]<=x){
            i++;
        }
        while(a[j]>x){
            j--;
        }
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;

    }
    public static void main(String[] args) {
        
    }
}
