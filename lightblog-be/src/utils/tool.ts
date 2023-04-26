export class tool {
    /** 将数据库存储的时间格式化为年月日 */
    public static formatDate(date: Date): string {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = ('0' + (d.getMonth() + 1)).slice(-2);
        const day = ('0' + d.getDate()).slice(-2);
        return `${year}年${month}月${day}日`;
    }

    /** 将别名转化为安全的url路径 */
    public static formatUrlPath(str: string): string {
        const encodedStr = encodeURIComponent(str);
        return encodedStr.replace(/[!'()*]/g, (c) => {
            return '%' + c.charCodeAt(0).toString(16);
        });
    }

    /** 将其他类型转换为数字类型 */
    public static toNumber(value: any, setValue?: any): any {
        return value ? Number(value) : setValue;
    }

    /** 检查邮箱格式是否正确 */
    public static checkEmail(email: string): boolean {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        return reg.test(email);
    }
}

