import Narration from "@/app/components/essay/Narration";
import { User } from "@/app/components/essay/User";
import { AI } from "@/app/components/essay/AI";
import Note from "@/app/components/essay/Note";
import Link from "next/link";

export default function TheBeginning() {
  return (
    <div className="flex flex-col items-center px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">The Beginning</h1>

      <Narration>
        A small question slipped into the air, almost unnoticed.
      </Narration>

      <User>
        <div>
          <h2>ちょっと思ったんだけど</h2>
          <p>これってすごくない？</p>
        </div>
      </User>

      <AI>
        <div>
          <h2>それは確かに注目に値します</h2>
          <p>もう少し深掘りしてみましょうか。</p>
          <pre>
            <code>const insight = &quot;閃き&quot;;</code>
          </pre>
        </div>
      </AI>

      <Note>
        (At this point, the dialogue was still tentative, like feeling the
        surface of a new lake with bare feet.)
      </Note>

      <Link href="/essays" className="mt-8 text-blue-600 hover:underline">
        ← Back to Essays
      </Link>
    </div>
  );
}
