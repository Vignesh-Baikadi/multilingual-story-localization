import { useRef, useState } from "react";
import { FiUploadCloud, FiFileText, FiCheckCircle } from "react-icons/fi";

import AppLayout from "../components/layout/AppLayout";
import StoryPreview from "../components/story/StoryPreview";
import LoadingSpinner from "../components/common/LoadingSpinner";
import storyService from "../services/storyService";

export default function StoryUploadPage() {
    const inputRef = useRef<HTMLInputElement>(null);

    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState("");
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    function validateFile(file: File) {
        const extension = file.name.split(".").pop()?.toLowerCase();

        if (!["pdf", "txt"].includes(extension || "")) {
            setError("Only PDF and TXT files are supported.");
            return false;
        }

        if (file.size > 10 * 1024 * 1024) {
            setError("Maximum file size is 10 MB.");
            return false;
        }

        setError("");
        return true;
    }

    function handleFile(file: File) {
        if (!validateFile(file)) return;
        setFile(file);
    }

    async function handleUpload() {
        if (!file) return;

        try {
            setLoading(true);

            const data = await storyService.uploadStory(file);

            setTitle(data.filename);
            setPreview(data.preview);
        } catch {
            setError("Failed to upload story.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AppLayout>
            <div className="mx-auto max-w-5xl">

                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-white">
                        Upload Story
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Upload a PDF or TXT story to generate AI insights and multilingual localization.
                    </p>
                </div>

                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();

                        if (e.dataTransfer.files.length) {
                            handleFile(e.dataTransfer.files[0]);
                        }
                    }}
                    onClick={() => inputRef.current?.click()}
                    className="cursor-pointer rounded-3xl border-2 border-dashed border-indigo-500/40 bg-white/5 p-14 text-center backdrop-blur-xl transition hover:border-indigo-400 hover:bg-white/10"
                >
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white">
                        <FiUploadCloud size={40} />
                    </div>

                    <h2 className="text-2xl font-semibold text-white">
                        Drag & Drop your story
                    </h2>

                    <p className="mt-3 text-slate-400">
                        or click anywhere to browse files
                    </p>

                    <p className="mt-6 text-sm text-slate-500">
                        Supported: PDF • TXT • Max 10 MB
                    </p>

                    <input
                        ref={inputRef}
                        type="file"
                        accept=".pdf,.txt"
                        hidden
                        onChange={(e) => {
                            if (e.target.files?.length) {
                                handleFile(e.target.files[0]);
                            }
                        }}
                    />
                </div>

                {file && (
                    <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                <FiFileText size={22} />
                            </div>

                            <div>
                                <p className="font-medium text-white">
                                    {file.name}
                                </p>

                                <p className="text-sm text-slate-400">
                                    {(file.size / 1024).toFixed(1)} KB
                                </p>
                            </div>

                        </div>

                        <button
                            onClick={handleUpload}
                            disabled={loading}
                            className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500 disabled:opacity-50"
                        >
                            Upload Story
                        </button>
                    </div>
                )}

                {loading && (
                    <div className="mt-8">
                        <LoadingSpinner />
                    </div>
                )}

                {error && (
                    <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                        {error}
                    </div>
                )}

                {preview && (
                    <div className="mt-10">

                        <div className="mb-5 flex items-center gap-3 text-emerald-400">
                            <FiCheckCircle />
                            <span>Story uploaded successfully.</span>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}