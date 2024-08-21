import { useState, useEffect } from 'react';

interface ImageMap {
    [key: string]: string;
}

const useBookImages = () => {
    const [images, setImages] = useState<ImageMap>({});

    useEffect(() => {
        const importAllImages = () => {
            const imageModules = import.meta.glob<{ default: string }>(
                '../assets/books/*.{png,jpg,jpeg,svg}',
            );
            const images: ImageMap = {};

            for (const path in imageModules) {
                imageModules[path]().then(mod => {
                    const fileName = path.replace('../assets/books/', '');
                    images[fileName] = mod.default;
                    setImages(prevImages => ({
                        ...prevImages,
                        [fileName]: mod.default,
                    }));
                });
            }
        };

        importAllImages();
    }, []);

    const getImageByName = (name: string): string | undefined => {
        return images[name] || images['image_not_available.png'];
    };

    return { images, getImageByName };
};

export default useBookImages;
