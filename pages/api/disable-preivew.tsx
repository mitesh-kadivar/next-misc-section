export default function handler(req: any, res: any) {
    res.clearPreviewData()
    res.redirect(req.query.redirect)  // api/disable-preivew?redirect=/news
    res.end('Preview Mode disabled')
}