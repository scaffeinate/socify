module PostsHelper
  def link_thumbnail(link)
    LinkThumbnailer.generate(link)
  end
end
