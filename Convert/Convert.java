import org.junit.Test;

public class Convert {
    @Test
    public void test(){
//        String s = "LEETCODEISHIRING";
        String s = "PAYPALISHIRING";
//        String s = "ABC";
        int numRows = 4;

        System.out.println(convert(s , numRows));
    }


    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }

        int n = s.length();
        StringBuilder[] str = new StringBuilder[numRows];
        int flag=0;
        int index=0;
        for (int i = 0; i <numRows ; i++) {
            str[i]=new StringBuilder();
        }
        for (int i = 0; i < n; i++) {
            if(flag==0) {
                str[index].append(s.charAt(i));
                index++;
                if(index==numRows-1){
                    flag=1;
                }
            }else {
                str[index].append(s.charAt(i));
                index--;
                if (index==0){
                    flag=0;
                }
            }
        }

        for (int i = 1; i < numRows; i++) {
            str[0].append(str[i].toString());
        }
        return str[0].toString();
    }


    //妈逼,想复杂了,操
    public String convert1(String s, int numRows) {

        if(s.length() <= numRows || numRows == 1){
            return s;
        }

        //间隔
        int diff = numRows - 1;

        //充满次数
        int full = s.length() / numRows - 1;

        int less = s.length() % numRows;

        int xLength = 0;
        if(less != 0){
            xLength = full +  (full) * (diff - 1)  + less;
        }else{
            xLength = full +  (full - 1) * (diff - 1);
        }

        char[][] chars = new char[xLength][numRows];
        int start = 0;
        for(int i = 0 ; i < full ; ){
            int end = start + diff;
            fillArray(i * (numRows - 1) , s.substring(start , end + 1) , chars);
            i++;
            start = (numRows + numRows - 2) * i;
            insertArray((i - 1) * (numRows - 1) + 1 , s , chars , numRows , end , i);
        }

        StringBuffer sb = new StringBuffer();
        for(int j = 0 ; j < numRows ; j++){
            for(int i = 0 ; i < xLength ; i++){
                if(chars[i][j] != '0' && chars[i][j] != '\u0000'){
                    sb.append(chars[i][j]);
                }
            }
        }

        int min = s.length() - sb.toString().length();

        if(min != 0){
            plusChar(min , chars , s , xLength ,numRows);
            sb = new StringBuffer();
            for(int j = 0 ; j < numRows ; j++){
                for(int i = 0 ; i < xLength; i++){
                    if(chars[i][j] != '0' && chars[i][j] != '\u0000'){
                        sb.append(chars[i][j]);
                    }
                }
            }
        }
        return sb.toString();
    }


    public void fillArray(int index, String string , char[][] chars){
        chars[index] = string.toCharArray();
    }

    public void insertArray(int index , String string , char[][] chars , int numRows , int start , int count){
        int i = index % (numRows - 1);
        int j = (numRows - 1) - i;
        while (true){
            j = (numRows - 1) - i;
            if(j < 1){
                break;
            }
            if(start >= string.length() - 1){
                break;
            }
            chars[(numRows - 1) * (count - 1) + i][j] = string.substring(start + 1 , start + 2).toCharArray()[0];
            i++;
            start++;
        }
    }

    public void plusChar(int min , char[][] chars , String s , int lastLine , int numRows){
        char[] plusChar = s.substring(s.length() - min , s.length()).toCharArray();
        int i = 0 ;
        for(int j = 0 ; j < numRows ; j++){
            if(i < plusChar.length){
                chars[lastLine - 1][j] = plusChar[i];
                i++;
            }
        }
    }
}
