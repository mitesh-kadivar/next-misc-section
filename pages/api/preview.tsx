export default function handler(req: any, res: any) {
    res.setPreviewData({})
    res.redirect(req.query.redirect)  // api/preview?redirect=/news
    res.end('Preview Mode enabled')
}