import org.junit.Test;

import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

public class ThreeSumClosest {

    @Test
    public void test(){
//        int[] nums = {-1,2,1,-4};
//        int target = 1;

        int[] nums = {25,-12,2,66,-8,67,67,-93,-97,-68,-49,-24,49,90,31,87,-1,14,50,-25,69,-91,-23,82,-43,96,80,43,4,-87,40,24,-71,-10,-16,78,-60,-20,-84,69,84,84,16,-23,-25,88,15,72,-82,-72,-16,49,50,26,3,26,-92,82,-69,60,-81,24,-25,-47,-77,-37,-33,69,21,-50,56,-43,18,-87,96,47,59,37,100,23,-34,-69,-12,-83,-65,91,75,100,24,80,64,-27,-31,39,-46,-73,88,-13,-10,67,95,27,91,-61,-44,67,0,-29,-57,-61,-62,83,-6,82,-58,-58,-5,-87,-44,9,-20,-28,3,17,57,-63,78,34,7,-68,30,-49,77,-97,15,-42,-49,-22,-60,78,84,35,19};
        int target = 250;
        System.out.println(threeSumClosest(nums , target));
    }

    public int threeSumClosest(int[] nums, int target) {
        if(nums.length == 0){
            return 0;
        }
        if(nums.length == 1){
            return nums[0];
        }

        int result = 0;
        int sum;
        Map<Integer , Integer> integerMap = new TreeMap<>();
        for(int i = 0 ; i < nums.length ; i++){
            for(int j = i + 1 ; j < nums.length ; j++){
                for(int k = j + 1 ; k < nums.length ; k++){
                    sum = nums[i] + nums[j] + nums[k];
                    System.out.println(nums[i] + "\t" + nums[j] + "\t" + nums[k] + "\n");
                    integerMap.put(Math.abs(sum - target) , sum);
                }
            }
        }

        Integer key = integerMap.keySet().iterator().next();

        result = integerMap.get(key);

        return result;
    }
}
