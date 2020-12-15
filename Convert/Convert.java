import org.junit.Test;

public class Convert {
    @Test
    public void test(){
        String s = "LEETCODEISHIRING";
        int numRows = 3;

        System.out.println(convert(s , numRows));
    }

    public String convert(String s, int numRows) {
        //间隔
        int diff = numRows - 1;

        //充满次数
        int full = s.length() / numRows;

        int less = s.length() % numRows;

        String[][] strings = new String[diff * full][numRows];

        for(int i = 0 ; i < full - 1 ; i+=diff){
            strings = s.substring();
        }

        return "";
    }
}
