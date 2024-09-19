
public class ArmStrong {
  public static void main(String[] args) {
    int num=371;
    int org=num;
    int temp=0;
    while(num !=0){
      int rem=num % 10;
      double m =Math.pow (rem,3);
      temp+=m;
      num /=10;
    }
    if(org==temp){
      System.out.println("Armstrong number");
    }else{
      System.out.println("not ");
    }
  }
}
