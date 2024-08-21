import { useState, useEffect } from 'react';

interface ImageMap {
    [key: string]: string;
}

const useBookImages = () => {
    const [images, setImages] = useState<ImageMap>({});

    useEffect(() => {
        const importAllImages = async () => {
            const imageModules = import.meta.glob<{ default: string }>(
                '../assets/books/*.{png,jpg,jpeg,svg}',
            );
            const images: ImageMap = {};

            for (const path in imageModules) {
                const mod = await imageModules[path]();
                const fileNameWithExtension = path.replace('../assets/books/', '');
                const fileName = fileNameWithExtension.replace(/\.(png|jpg|jpeg|svg)$/, '');

                images[fileName] = mod.default;
                setImages(prevImages => ({
                    ...prevImages,
                    [fileName]: mod.default,
                }));
            }
        };

        importAllImages();
    }, []);

    const getImageByName = (name: string): string | undefined => {
        return images[name] || images['image_not_available'];
    };

    return { images, getImageByName };
};

export default useBookImages;
