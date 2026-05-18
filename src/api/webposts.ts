type PostLanguages = "es" | "en" | "fr" | "de" | "it" | "pt" | "ru" | "zh" | "ja" | "ko"
type TetoPiece = "T" | "O" | "L" | "J" | "Z" | "S" | "I"
type APIWebpagePost = {
  /** UUID V7 */
  readonly id: string
  slug: string | null
  /**
   * The title of the post
   * @maxlength 255 characters
   */
  title: string | null
  /**
   * @maxlength 1000 characters
   */
  text: string

  image_id: string | null
  category: string | null
  published_at: string
  date_label: string
  banner_principal: boolean
  piece: TetoPiece
  /**
   * @maxlength 16.000 characters
   */
  markdown_content: string
  lateral_noticias: boolean
  /**
   * API defaults this to "es"
   * @default "es"
   */
  language: PostLanguages
}

type APIWebpagePostCreationData = {
  text: string
  /** Date formatted string */
  published_at: string
  markdown_content: string
  date_label: string
  slug?: string | null
  title?: string | null
  image_id?: string | null
  category?: string | null
  banner_principal?: boolean
  piece?: TetoPiece
  lateral_noticias?: boolean
  /**
   * API defaults this to "es"
   * @default "es"
   */
  language?: PostLanguages
}

type APIWebpageEditData = Partial<Omit<APIWebpagePostCreationData, "id">>

