import org.junit.Test;

import java.math.BigDecimal;
import java.math.BigInteger;

public class MathPow {
    @Test
    public void test(){
        System.out.println(pow2(new BigDecimal(10) , -2));
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


    public BigDecimal pow2(BigDecimal target , double mi){

        if(target.equals(0)){
            return new BigDecimal(0);
        }

        if(mi == 0){
            return new BigDecimal(1);
        }

        if(mi < 0){
            target = new BigDecimal(1).divide(target);
            mi = mi * -1;
        }
        if (mi == 1){
            return target;
        }else{
            return pow2(target.multiply(target) , mi - 1);
        }
    }
}
