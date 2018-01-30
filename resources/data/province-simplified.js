export default [
  {
    name: '北京',
    id: '1',
    children: [
      { name: '区', id: '1-1', children: ['东城区', '西城区', '崇文区', '宣武区', '朝阳区', '丰台区', '石景山区', '海淀区', '门头沟区', '房山区', '通州区', '顺义区', '昌平区', '大兴区', '怀柔区', '平谷区'] },
      { name: '县', id: '1-2', children: ['密云县', '延庆县'] }
    ]
  },
  {
    name: '上海',
    id: '2',
    children: [
      {
        name: '区',
        id: '2-1',
        children: [
          '黄浦区', '卢湾区', '徐汇区',
          '长宁区', '静安区', '普陀区', '闸北区', '虹口区',
          '杨浦区', '闵行区', '宝山区', '嘉定区', '浦东新区',
          '金山区', '松江区', '青浦区', '南汇区', '奉贤区'
        ]
      },
      { name: '县', id: '2-2', children: [{ name: '崇明县', id: '2-2-1' }] }
    ]
  },
  {
    name: '天津',
    id: '3',
    children: [
      { name: '区', id: '3-1', children: ['和平区', '河东区', '河西区', '南开区', '河北区', '红桥区', '塘沽区', '汉沽区', '大港区', '东丽区', '西青区', '津南区', '北辰区', '武清区', '宝坻区'] },
      { name: '县', id: '3-2', children: ['宁河县', '静海县', '蓟　县'] }
    ]
  }
];
