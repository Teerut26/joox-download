export interface ResponseInterface {
    seo: Seo
    topcharts: Topcharts
    commentList: CommentList[]
  }
  
  export interface Seo {
    retCode: number
    retMsg: string
    data: Data
    dataFromCache: boolean
    status_code: number
  }
  
  export interface Data {
    title: string
    description: string
    keyword: string
    canonical: any
    facebook_title: string
    facebook_description: string
    facebook_image: any
    twitter_title: string
    twitter_description: string
    twitter_image: any
    passing_arguments: PassingArguments
    topkeywords: Topkeyword[]
    interlinking_id: any
  }
  
  export interface PassingArguments {
    chart_name_1: string
    chart_name_2: string
    chart_name_3: string
    chart_name_4: string
    chart_name_5: string
  }
  
  export interface Topkeyword {
    keyword: string
    href: string
    order: number
  }
  
  export interface Topcharts {
    code: number
    msg: string
    status_code: number
    data: Daum[]
  }
  
  export interface Daum {
    id: number
    name: string
    track_list: TrackList
    update_time: string
    images: Image2[]
  }
  
  export interface TrackList {
    id: number
    tracks: Tracks
  }
  
  export interface Tracks {
    items: Item[]
  }
  
  export interface Item {
    id: string
    name: string
    artist_list: ArtistList[]
    album_id: number
    play_duration: number
    vip_flag: number
    images: Image[]
  }
  
  export interface ArtistList {
    id: string
    name: string
  }
  
  export interface Image {
    height: number
    url: string
    width: number
  }
  
  export interface Image2 {
    height: number
    url: string
    width: number
  }
  
  export interface CommentList {
    content_id: string
    content_type: string
    content_title: string
    content_desc: string
    content_desc_id: string
    content_image: string
    comment_txt: string
    comment_time: number
    comment_likes: number
    user_name: string
    user_image?: string
  }
  