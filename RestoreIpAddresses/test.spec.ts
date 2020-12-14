// 测试案例

import {restoreIpAddresses} from './solution.xq'

test('get valid ips', ()=> {
    expect(restoreIpAddresses("25525511135")).toStrictEqual(["255.255.11.135","255.255.111.35"])
    expect(restoreIpAddresses("0000")).toStrictEqual(["0.0.0.0"])
    expect(restoreIpAddresses("1111")).toStrictEqual(["1.1.1.1"])
    expect(restoreIpAddresses("010010")).toStrictEqual(["0.10.0.10","0.100.1.0"])
    expect(restoreIpAddresses("101023")).toStrictEqual(["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"])
    expect(restoreIpAddresses('123456888999')).toStrictEqual([])
    expect(restoreIpAddresses('123')).toStrictEqual([])
})