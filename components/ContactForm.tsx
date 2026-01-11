"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  return (
    <form
      className="space-y-5 rounded-2xl border border-white/10 bg-black/60 p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="focus-visible:ring-0 focus-visible:border-white/10"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@company.com"
            className="focus-visible:ring-0 focus-visible:border-white/20"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          type="text"
          placeholder="Company name (optional)"
          className="focus-visible:ring-0 focus-visible:border-white/20"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="panel-type">What kind of panel do you need?</Label>
        <Select defaultValue="appointment">
          <SelectTrigger className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white outline-none focus:border-white/20 focus:ring-0">
            <SelectValue placeholder="Select a panel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="appointment">
              Appointment / booking system
            </SelectItem>
            <SelectItem value="clinic">Clinic / doctor dashboard</SelectItem>
            <SelectItem value="employee">Employee tracking panel</SelectItem>
            <SelectItem value="scholarship">
              Scholarship / school panel
            </SelectItem>
            <SelectItem value="vendor">
              Vendor / partner management
            </SelectItem>
            <SelectItem value="other">Something else</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="workflow">Describe your workflow</Label>
        <Textarea
          id="workflow"
          required
          rows={5}
          placeholder="Who uses it, main steps (e.g. intake → approvals → tasks → reporting), tools to connect (if any)…"
          className="focus-visible:ring-0 focus-visible:border-white/20"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="timeline">
          Anything about budget or timeline?
        </Label>
        <Textarea
          id="timeline"
          rows={3}
          placeholder="Rough budget, launch deadline, or constraints (optional)"
          className="focus-visible:ring-0 focus-visible:border-white/20"
        />
      </div>

      <Button
        type="submit"
        className="mt-2 inline-flex h-10 items-center justify-center rounded-lg w-full md:w-auto"
      >
        Send message
      </Button>

      <p className="pt-1 text-xs text-zinc-400">
        By submitting, you agree we can contact you about this request.
      </p>
    </form>
  );
}

