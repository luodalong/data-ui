/**
 * @desc 校验身份证号是否合法
 * @param {String} idCardNum 18 位身份证号
 * @return {Boolean}
 */
export const validateIdCardNum = (idCardNum) => {
  // 非法字符串
  if (typeof idCardNum !== 'string') return false
  // 所有身份证前两位代表的是地区
  const city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  }
  const birthday =
    idCardNum.substring(6, 10) +
    '/' +
    Number(idCardNum.substring(10, 12)) +
    '/' +
    Number(idCardNum.substring(12, 14))
  const d = new Date(birthday)
  const newBirthday =
    d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate())
  const currentTime = new Date().getTime()
  const time = d.getTime()
  // 身份证系数列表
  const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  // 设定身份证通过相加运算得到值对应的身份证最后一位的列表
  const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  let sum = 0
  // 非法身份证
  if (!/^\d{17}(\d|x)$/i.test(idCardNum)) return false
  // 非法地区 非法地区
  if (city[idCardNum.substring(0, 2)] === undefined) return false
  // 非法生日
  if (time >= currentTime || birthday !== newBirthday) return false

  // 计算当前身份证最后一位的值
  for (let i = 0; i < 17; i++) {
    sum += idCardNum.substring(i, i + 1) * arrInt[i]
  }

  const residue = arrCh[sum % 11]
  // 非法身份证哦
  if (residue !== idCardNum.substring(17, 18)) return false

  return true
}

/**
 * @desc 校验电子邮件是否规范
 * @param {String} email
 * @return {Boolean}
 */
export const validateEmail = (email) => {
  const mailReg =
    /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return mailReg.test(email)
}

/**
 * @desc 校验联系电话是否规范
 * @param {String} phone
 * @return {Boolean}
 */
export const validatePhone = (phone) => {
  const phoneReg =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  return phoneReg.test(phone)
}
