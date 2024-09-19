class Prymide{
  public static void main(String[] args){
    int row = 7;
    for(int i=0;i<row;i++){
      for(int j=row-i-1;j>0;j--){
        System.out.print(" ");
      }
      for(int k=0;k<i*2+1;k++){
        System.out.print("*");
      }
      for(int j=row-i-1;j>0;j--){
        System.out.print(" ");
      }
      System.out.println();
    }
  }
}

//      *
//     ***
//    *****


public class InnerPrymide {
  public static void main(String[] args) {
    int row=7;
    for(int i=row;i>0;i--){
      for(int j=i;j>=0;j--){
        System.out.print(" ");
      }
      for(int k=row-i;k>0;k--){
        System.out.print("*");
      }
      for(int j=i;j>=0;j--){
        System.out.print(" ");
      }
      System.out.println(" ");
    }
  }  
}
