export interface ResponseListSongInterface {
    seo: Seo;
    topCharts: TopCharts;
    tracksItemList: TracksItemList;
}

export interface Seo {
    retCode: number;
    retMsg: string;
    data: Data;
    dataFromCache: boolean;
    status_code: number;
}

export interface Data {
    title: string;
    description: string;
    keyword: string;
    canonical: any;
    facebook_title: string;
    facebook_description: string;
    facebook_image: any;
    twitter_title: string;
    twitter_description: string;
    twitter_image: any;
    passing_arguments: PassingArguments;
    topkeywords: Topkeyword[];
    interlinking_id: number;
}

export interface PassingArguments {
    chart_name: string;
    top_song_1: string;
    top_song_2: string;
    top_song_3: string;
    top_song_4: string;
    top_song_5: string;
    artist_1: string;
    artist_2: string;
    artist_3: string;
    artist_4: string;
    artist_5: string;
}

export interface Topkeyword {
    keyword: string;
    href: string;
    order: number;
}

export interface TopCharts {
    toplists_cnt: number;
    toplists_count: number;
    toplists: Toplist[];
    error_code: number;
    error: string;
    status_code: number;
}

export interface Toplist {
    id: string;
    name: string;
    images: Image[];
    track_num: number;
    update_time: string;
    song_list: SongList[];
}

export interface Image {
    width: number;
    height: number;
    url: string;
}

export interface SongList {
    album_id: string;
    id: string;
    name: string;
    album_name: string;
    artist_list: ArtistList[];
    play_duration: number;
    images: Image2[];
    vip_flag: number;
    is_playable: boolean;
    track_free_action_control: number;
}

export interface ArtistList {
    id: string;
    name: string;
}

export interface Image2 {
    width: number;
    height: number;
    url: string;
}

export interface TracksItemList {
    id: string;
    tracks: Tracks;
    status_code: number;
}

export interface Tracks {
    items: Item[];
    list_count: number;
    next_index: any;
    total_count: number;
}

export interface Item {
    album_id: string;
    album_name: string;
    artist_list: ArtistList2[];
    genre: string;
    has_hifi: number;
    has_hq: number;
    id: string;
    images: Image3[];
    isrc: string;
    label: string;
    language: string;
    lrc_exist: number;
    name: string;
    play_duration: number;
    qrc_exist: number;
    source_name: string;
    supplier: string;
    track_free_action_control: number;
    track_label_flag: number;
    track_vip_action_control: number;
    vip_flag: number;
    is_playable: boolean;
}

export interface ArtistList2 {
    id: string;
    name: string;
}

export interface Image3 {
    height: number;
    url: string;
    width: number;
}
