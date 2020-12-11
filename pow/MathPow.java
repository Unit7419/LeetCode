import org.junit.Test;

public class MathPow {
    @Test
    public void test(){
        System.out.println(pow(10 , -2));
    }

    public double pow(double target , double mi){
        double d = 1;
        Double intValue = null;
        if(mi < 0){
            intValue = new Double(mi * -1);
        }else{
            intValue = new Double(mi);
        }


        for(int i = 0 ; i < intValue.intValue() ; i++){
            d = d * target;
        }

        if(mi < 0){
            d = 1 / d;
        }
        return d;
    }
}
