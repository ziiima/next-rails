class SerializerGenerator < Rails::Generators::NamedBase
  source_root File.expand_path("templates", __dir__)
  argument :attributes, type: :array, default: []

  def create_serializer_files
    template "serializer.rb", File.join("app/serializers", class_path, "#{file_name}_serializer.rb")
  end

  private
    def file_name
      @_file_name ||= remove_possible_suffix(super)
    end

    def remove_possible_suffix(name)
      name.sub(/_?serializer$/i, "")
    end
end
