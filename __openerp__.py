{
    'name' : '广州导道DDERP js 条码',
    'version': '1.0',
    'author': '周耀祥',
    'summary': '广州导道DDERP js 条码',
    'category': 'erp',
    'description':
        """
 广州导道DDERP js 条码
        """,
    'website': 'http://www.designdock.cn',
    'data': [
        'js_barcode.xml',
    ],
    'depends' : ['base'],
    'qweb': ['static/src/xml/*.xml'],
    'application': True,
    'installable': True,
    'auto_install': False,
}
